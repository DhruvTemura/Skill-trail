import sys
import json
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Read JSON input from Node.js
user_data = json.loads(sys.stdin.read())
print("📥 Received user data:", user_data, file=sys.stderr)

# Sample role dataset
roles_data = pd.DataFrame([
    {
        "role": "Data Scientist",
        "description": "Data Scientists analyze data, build machine learning models, and use tools like Python, statistics, and visualization to solve business problems.",
        "salary_range": "$85,000 - $130,000",
        "growth_rate": "+22% (Much faster than average)",
        "work_mode": "Remote/Hybrid friendly",
        "work_type": "Team-based with independent analysis"
    },
    {
        "role": "UI/UX Designer",
        "description": "UI/UX Designers craft user experiences using tools like Figma, wireframing, and user research. They combine creativity with user empathy to build intuitive interfaces.",
        "salary_range": "$70,000 - $100,000",
        "growth_rate": "+15%",
        "work_mode": "Remote/On-site",
        "work_type": "Creative and collaborative"
    },
    {
        "role": "Cloud Engineer",
        "description": "Cloud Engineers work with AWS and DevOps practices to deploy and manage cloud infrastructure. They focus on networking, automation, and security in distributed systems.",
        "salary_range": "$90,000 - $140,000",
        "growth_rate": "+19%",
        "work_mode": "Remote/Hybrid",
        "work_type": "Back-end focused, infrastructure-heavy"
    }
])

# Combine user inputs into a single text string
user_text = " ".join(
    user_data.get("skills", []) +
    user_data.get("interests", []) +
    [user_data.get("education", ""), user_data.get("preferred_workstyle", "")]
)

# TF-IDF and cosine similarity
vectorizer = TfidfVectorizer(stop_words='english', ngram_range=(1, 2))
tfidf_matrix = vectorizer.fit_transform((roles_data["role"] + " " + roles_data["description"]).tolist() + [user_text])
cosine_sim = cosine_similarity(tfidf_matrix[-1], tfidf_matrix[:-1])[0]
cosine_sim = [score if score > 0 else 0.01 for score in cosine_sim]

cosine_sim = np.array(cosine_sim)
top_indices = cosine_sim.argsort()[-3:][::-1]
top_roles = roles_data.iloc[top_indices]
top_scores = cosine_sim[top_indices]

# Format output
recommendations = []
for i, row in top_roles.iterrows():
    recommendations.append({
        "role": row["role"],
        "match_score": round(top_scores[list(top_roles.index).index(i)] * 100, 2),
        "description": row["description"],  # Matches frontend naming
        "salaryRange": row["salary_range"],  # Matches frontend
        "growthRate": row["growth_rate"],
        "workStyle": row["work_type"],
        "location": row["work_mode"],
        "skills": user_data.get("skills", []),  # Echoing back user skills
        "companies": ["Google", "Microsoft", "Meta"]  # Placeholder companies
    })

# Debug print before sending to Node.js
print("📤 Sending recommendations:", recommendations, file=sys.stderr)

# Send JSON response to Node.js
print(json.dumps(recommendations))
