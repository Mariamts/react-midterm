// depents what we need in our application

const apiUrl = 'https://fakerapi.it/api/v1';
export class API_SERVICE {
  static async getAddressList({ start = 1, limit = 10 }) {
    const url = `${apiUrl}/addresses?_limit=${limit}`;
    // example of filter
    // const url = `${process.env.REACT_APP_API_URL}/todos?_start=${start}&_limit=${limit}`;

    try {
      const response = await fetch(url)
        .then((res) => res.json())
        .then((result) => result.data);

      const result = await response;

      const finalArray = result.map((item, index) => {
        return { ...item, id: index };
      });
      return finalArray;
    } catch (err) {
      console.log(err);
    }
  }

  static async getBooksList({ start = 1, limit = 10 }) {
    const url = `${apiUrl}/books`;
    // example of filter
    // const url = `${process.env.REACT_APP_API_URL}/todos?_start=${start}&_limit=${limit}`;

    try {
      const response = await fetch(url)
        .then((res) => res.json())
        .then((result) => result.data);

      const result = await response;

      const finalArray = result.map((item, index) => {
        return { ...item, id: index };
      });
      return finalArray;
    } catch (err) {
      console.log(err);
    }
  }
}

export default API_SERVICE;