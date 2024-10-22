import { mockTodo } from '../__mocks__/todos.mock';
import { createTodo, createTodoOnServer } from '../createTodo';

const mockedV4 = jest.fn(() => 'uniqueId1')

jest.mock('uuid', () => ({
  ...jest.requireActual('uuid'),
  v4: () => mockedV4(),
}))

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockTodo),
  })
);
describe('createTodo testing', () => {

afterEach(() => {
  jest.clearAllMocks();
})

  test('should create todo', () => {
    const title = 'Todo 1'
    const expectedResult = {
      title,
      completed: false,
      id: 'uniqueId1',
    }
    const todo = createTodo(title)
    expect(mockedV4).toHaveBeenCalledTimes(1)
    expect(todo).toEqual(expectedResult)
  })

  test('should create todo on server', async () => {
    const result = await createTodoOnServer('Todo 1')
    expect(result).toEqual(mockTodo)
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  test('should throw an error when if fetch fails', async () => {
    fetch.mockRejectedValueOnce('uniqueId2')
    await expect(createTodoOnServer('Todo 1')).rejects.toMatch('uniqueId2')
  })

  test('should throw an error when response is not ok', async () => {
    fetch.mockResolvedValueOnce({ ok: false })
    const fnToThrow = () => createTodoOnServer('Todo 1')
    await expect(fnToThrow).rejects.toThrow('Cannot create todo')
  })

  test('should throw an error when no valid title is provided',  (done) => {
    try {
      createTodo('');
      done('createTodo should throw an error for invalid values');
    } catch (error) {
      expect(error.message).toBe('title is required!');
      done();
    }
    // const fnToThrow = () => createTodo('')
    // await expect(fnToThrow).toThrow('title is required!')
  })

})