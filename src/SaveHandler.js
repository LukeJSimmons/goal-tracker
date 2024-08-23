const SaveData = (data) => {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('data', jsonData);
}

const LoadData = () => {
    const jsonData = localStorage.getItem('data');
    if (jsonData) {
        return JSON.parse(jsonData);
    }
    SaveData([]);
    return LoadData();
}

export {SaveData, LoadData};