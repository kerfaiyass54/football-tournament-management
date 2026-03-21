from typing import Any, Dict, List


def format_value(value: Any, indent: int = 0) -> str:
    spacing = "  " * indent

    if isinstance(value, dict):
        lines = []
        for key, val in value.items():
            formatted = format_value(val, indent + 1)
            lines.append(f"{spacing}- {key}: {formatted}")
        return "\n".join(lines)

    elif isinstance(value, list):
        lines = []
        for item in value:
            formatted = format_value(item, indent + 1)
            lines.append(f"{spacing}- {formatted}")
        return "\n".join(lines)

    else:
        return str(value)


def generate_explanation(question: str, data: Dict[str, Any]) -> str:
    explanation = f"You asked:\n\"{question}\"\n\n"

    if not data:
        explanation += "The system returned no data."
        return explanation

    explanation += "Here is the information retrieved:\n\n"

    explanation += format_value(data)

    explanation += "\n\nThis information answers your question based on the available data."

    return explanation