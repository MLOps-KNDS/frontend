import fastapi
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from dataclasses import dataclass


app = fastapi.FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)


@dataclass
class User:
    name: str
    surname: str
    email: str


@dataclass
class Model:
    name: str
    description: str
    status: bool
    created_at: str
    created_by: User
    updated_at: str
    updated_by: User


# create 6 random users

users = [
    User("John", "Doe", "rrwew@efwfs.com"),
    User("Jane", "Doe", "rwefs@fesf.com"),
    User("John", "Smith", "ewqeGr@ewrw.com"),
    User("Jane", "Smith", "eewqfes@tgrw.com"),
    User("Foo", "Bar", "foo@bar.pl"),
    User("Bar", "Foo", "bar@foo.com")
]

# create 6 random models

models = []
for i, user in enumerate(users):
    models.append(Model(
        name=f"Model {i}",
        description=f"Description {i}",
        status=True,
        created_at="2021-01-01",
        created_by=user,
        updated_at="2021-01-01",
        updated_by=user
    ))


@app.get("/models")
def get_models():
    return {"models": models}


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=3000)
