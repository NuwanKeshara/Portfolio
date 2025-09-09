import React from "react";

function article_1() {
	return {
		date: "1 September 2025",
		title: "10 Advanced Spark Optimization Techniques",
		description:
			"Apache Spark is very powerful but running huge jobs efficiently requires more optimizing than the default settings. If you are only relying on default configurations, you could be faced with long execution times, high resource utilization and even job failures. In this post, I will go through 10 advanced level optimization techniques to squeeze optimal performance out of Spark.",
		keywords: [
			"Advanced Spark Optimization",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "26 March 2025",
		title: "IoT Real-time processing with Azure Databricks",
		description:
			"This project focused on building a data pipeline to ingest and process IoT weather data, storing it in an Azure Databricks data Lakehouse using the Delta format and the Medallion Architecture. Finally, Power BI was used to visualize the data for analysis.",
		style: ``,
		keywords: [
			"IoT Real-time processing with Azure Databricks",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;
