import { useState } from "react";
import Cookies from "universal-cookie";

export default function ThemeSwitcher(props) {
    const cookies = new Cookies();

    const [isChecked, setIsChecked] = useState(
        cookies.get("theme") === "light"
    );

    function themeChanger(cookies, isChecked, setIsChecked) {
        props.setStyles(isChecked ? "dark" : "light");
        setIsChecked(!isChecked);
        cookies.set(
            "theme",
            cookies.get("theme") === "light" ? "dark" : "light",
            {
                path: "/",
                sameSite: "strict",
                expires: new Date(new Date().getFullYear() + 1, 0, 1),
            }
        );
    }

    return (
        <div className="flex items-center">
            <input
                className="h-6 w-6 appearance-none rounded-full after:absolute after:h-4 after:w-4 after:ml-[0.15rem] after:mt-[0.15rem] after:rounded-full after:transition-[transform_0.3s] checked:after:w-0 checked:after:h-0 checked:after:ml-[0.6rem] checked:after:mt-[0.6rem] hover:cursor-pointer border-2 border-dark-bg after:bg-secondary-text after:shadow-lg transition-shadow md:h-3.5 md:w-8 md:appearance-none md:rounded-[0.4375rem] md:after:absolute md:after:-mt-[0.30rem] md:after:h-5 md:after:w-5 md:after:rounded-full md:after:transition-[transform_0.2s] md:checked:bg-dark-bg md:checked:after:-ml-1 md:hover:cursor-pointer md:border-dark-bg md:bg-dark-bg md:after:bg-secondary-text md:checked:after:bg-secondary-text md:after:ml-3 md:checked:after:-mt-[0.30rem] md:checked:after:w-5 md:checked:after:h-5"
                type="checkbox"
                role="switch"
                checked={isChecked}
                onChange={() => themeChanger(cookies, isChecked, setIsChecked)}
            />
        </div>
    );
}
