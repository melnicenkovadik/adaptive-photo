
const URL = `https://boiling-refuge-66454.herokuapp.com/images`;

const fetchImages = async page => {
    const response = await fetch(`${URL}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export {fetchImages};
