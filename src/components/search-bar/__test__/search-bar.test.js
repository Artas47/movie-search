import movies from "../../../api/movies";
import mockAxios from "axios";

test("should call axios and return movies", async () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        results: [{ Title: "Prison Break" }]
      }
    })
  );
  const response = await movies("prison");
  expect(response.results).toEqual([{ Title: "Prison Break" }]);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    'https://www.omdbapi.com/?s="prison"&apikey=c6f9646d'
  );
});
