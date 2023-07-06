export default function Section(props) {
    return (
        <button
            onClick={() => {
                //Scroll to section "seatSection"
                document && document.getElementById("seatSection").scrollIntoView();
                props.setSection(props.section);
            }}
            className={
                " " +
                "border border-green hover:bg-light-blue " +
                "rounded " +
                "xl:text-xl xl:my-2 " +
                "lg:text-lg lg:my-3 " +
                "md:text-md md:my-3 " +
                "sm:text-sm sm:my-3 " +
                "min-[500px]:max-sm:my-4 min-[500px]:max-sm:text-xs " +
                "min-[400px]:max-[500px]:my-4 min-[400px]:max-[500px]:text-xs " +
                "min-[320px]:max-[400px]:my-4 min-[320px]:max-[400px]:text-xs"
            }>
            Sektion {props.section}
        </button>
    );
}
