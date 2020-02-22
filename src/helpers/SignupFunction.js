const storeLocal = (state) => {
  try {
    const data = JSON.stringify(state);
    localStorage.setItem('realUser', data);
  } catch (e) {
    console.log(e);
  }
};
const loadLocal = () => {
  try {
    const data = localStorage.getItem('realUser');
    if (data === null) return undefined;
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
export { storeLocal, loadLocal };
