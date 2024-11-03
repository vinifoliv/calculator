interface Props {
        expression: string
}

export default function Display(props: Props) {
    return (
        <section className="display">
            {props.expression}
        </section>
    );
}