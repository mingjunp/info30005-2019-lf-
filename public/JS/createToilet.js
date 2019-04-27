let url = "/createToilet";
const Data = {
    location: "12,11",
    picture: "test"
};

const otherParam = {
    headers: {
        "content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(Data),
    method: "POST"
};

function create() {
    fetch(url, otherParam).then(function (res) {
        console.log(res);
    });
};
