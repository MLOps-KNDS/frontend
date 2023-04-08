import fastapi
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from dataclasses import dataclass
# import random element selection
from random import choice


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
    status: str
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


@app.get("/models")
def get_models():
    # create 6 random models
    models = []
    statuses = ["online", "offline"]
    for i, user in enumerate(users):
        models.append(Model(
            name=f"Model {i}",
            description=f"Description {i}",
            status=choice(statuses),
            created_at=f"2021-01-0{i}",
            created_by=user,
            updated_at=f"2021-01-0{i+1}",
            updated_by=user
        ))
    return {"models": models}


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=3000)
