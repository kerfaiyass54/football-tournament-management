from pydantic import BaseModel
from typing import Any, Dict

class ExplanationRequest(BaseModel):
    question: str
    json_response: Dict[str, Any]

class ExplanationResponse(BaseModel):
    answer: str