import * as React from "react";
export interface SectionProps { content: string }

export class SectionHeader extends React.Component<SectionProps, {}> {
    render() {
        const WEEKDAYS: string[] = [
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sábado"
        ];
        let dtstr: string = String(this.props.content);
        let dt: string =
            dtstr.substr(4, 2) + "/" + dtstr.substr(6, 2) + "/" + dtstr.substr(0, 4);
        let d = new Date(dt);
        dt = WEEKDAYS[d.getDay() - 1].toUpperCase() + ", " + d.getDate();

        return (
            <header>
                <h1>{dt}</h1>
            </header>
        );
    }
}
