const data = [
	{
		soldier: {
			username: "cookie",
			menu: [
				{
					name: "weapons",
					score: 134,
					total: 200,
				},
				{
					name: "kits",
					score: 46,
					total: 64,
				},
				{
					name: "vehicles",
					score: 77,
					total: 182,
				},
				{
					name: "medals",
					score: 11,
					total: 54,
				},
				{
					name: "assignments",
					score: 21,
					total: 110,
				},
				{
					name: "dog tags",
					score: 357,
					total: 720,
				},
				{
					name: "battlepacks",
					score: 200,
					total: 300,
				},
			],
			gameStats: {
				wins: 44,
				scorePerMin: 562,
				killsPerMin: 0.6,
				topStats: [
					{
						type: "Top Vehicle",
						name: "Main Battle Tank",
						kills: 33,
						image_url: "/soldier__tank",
					},
					{
						type: "Top Primary",
						name: "ACW-R",
						kills: 465,
						image_url: "/acw",
					},
					{
						type: "Top Class",
						name: "ENGINEER",
						kills: 828524,
						image_url: "/engineer",
					},
					{
						type: "Top Sidearm",
						name: "M9",
						kills: 112,
						image_url: "/m9",
					},
				],
			},
		},
	},
];

module.exports = data;
