from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas import ExplanationRequest, ExplanationResponse
from explainer import generate_explanation

app = FastAPI(title="AI Explainer Service")

# Allow Angular frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/explain", response_model=ExplanationResponse)
def explain(request: ExplanationRequest):
    answer = generate_explanation(
        question=request.question,
        data=request.json_response
    )

    return ExplanationResponse(answer=answer)