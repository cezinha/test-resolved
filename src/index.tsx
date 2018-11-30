import * as React from "react";
import * as ReactDOM from "react-dom";
import { SectionHeader } from "./components/SectionHeader";
import { ArticleNews } from "./components/ArticleNews";
import * as jsondata from "./feed.json";
import { number } from "prop-types";

export const App = () => {
  type newsItem = {
    "type": string,
    "reference-date": number,
    "title": string,
    "thumb"?: string,
    "url": string,
    "blogger-name"?: string,
    "blogger-icon"?: string
  }
  let feedMap: newsItem[] = jsondata.feed;
  let content_date: string = String(feedMap[0]["reference-date"]);

  return (
    <div className="App">
      <section>
        <SectionHeader content={content_date} />
        { feedMap.map((data: any, i: number) => (
          <ArticleNews data={data} key={i} />
        )) }
      </section>
    </div>
  );
}

const rootElement: HTMLElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
