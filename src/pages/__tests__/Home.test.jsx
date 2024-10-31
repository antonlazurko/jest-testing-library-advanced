import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { renderWithRouter } from "../../utils/testing";
import userEvent from "@testing-library/user-event";
import { Home } from "../Home";
import * as api from "../../api";

const apiSpy = jest.spyOn(api, "getAllCategories");

const categories = [
    {
        idCategory: "1",
        strCategory: "test",
        strCategoryThumb: "/test.png",
        strCategoryDescription: "test",
    },
    {
        idCategory: "2",
        strCategory: "test2",
        strCategoryThumb: "/test.png",
        strCategoryDescription: "test",
    },
];

describe("Home", () => {
    test("should render correctly", async() => {
        apiSpy.mockResolvedValueOnce({categories});

        renderWithRouter(<Home/>);

        const preloader = screen.getByRole("progressbar");

        expect(preloader).toBeInTheDocument();
        expect(screen.getByRole("searchbox")).toBeInTheDocument();
        await waitForElementToBeRemoved(preloader);

        expect(screen.getAllByRole("article")).toHaveLength(2);
    });

    test('should render Home with search', async() => {
        apiSpy.mockResolvedValueOnce({categories});

        renderWithRouter(<Home />, {
            initialEntries: ["/?search=test2"]
        });
        const preloader = screen.getByRole("progressbar");

        expect(preloader).toBeInTheDocument();

        await waitForElementToBeRemoved(preloader);

        expect(screen.getAllByRole("article")).toHaveLength(1);
    });

    test('should render Home with search', async() => {
        apiSpy.mockResolvedValue({categories});

        renderWithRouter(<Home />);
        const preloader = screen.getByRole("progressbar");
        const input = screen.getByRole("searchbox");

        expect(preloader).toBeInTheDocument();

        await waitForElementToBeRemoved(preloader);

        expect(screen.getAllByRole("article")).toHaveLength(2);
        await userEvent.type(input, "test2");
        await userEvent.click(screen.getByRole("button"));

        expect(screen.getAllByRole("article")).toHaveLength(1);
    });
});