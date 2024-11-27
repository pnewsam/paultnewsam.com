import { names } from "./MockApi.data";

type Person = {
  id: number;
  name: string;
};

class MockApi {
  people: Person[];

  constructor() {
    this.people = names.map((name, index) => ({ id: index, name }));
  }

  fetchPeople = async ({
    page = 1,
    pageSize = 40,
  }: {
    page?: number;
    pageSize?: number;
  }): Promise<Person[]> => {
    const newPeople = this.people.slice((page - 1) * pageSize, page * pageSize);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return newPeople;
  };
}

export const api = new MockApi();
