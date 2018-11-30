import * as React from "react";
import { any } from "prop-types";

export interface ArticleProps { data: any, key: number }

export class ArticleNews extends React.Component<ArticleProps, {}> {
    renderImage() {
        if (this.props.data.type === "news" && this.props.data.thumb) {
            return <img src={this.props.data.thumb} alt={this.props.data.title} />;
        }
        if (this.props.data["blogger-icon"]) {
            let bgstyle = {
            backgroundImage: "url('" + this.props.data["blogger-icon"] + "')"
            };
            return <figure style={bgstyle} />;
        }
        return;
    }

    renderBlog() {
        if (this.props.data.type === "news") {
            return;
        }
        return <p className="name">{this.props.data["blogger-name"]}</p>;
    }

    render() {
        let strdate = String(this.props.data["reference-date"]);
        let dt = strdate.substr(8, 2) + "h" + strdate.substr(10, 2);
        return (
            <article className={this.props.data.type}>
            {this.renderImage()}
            {this.renderBlog()}
            <h1>
                <a href={this.props.data.url}>{this.props.data.title}</a>
            </h1>
            <p className="time">{dt}</p>
            </article>
        );
    }
}
