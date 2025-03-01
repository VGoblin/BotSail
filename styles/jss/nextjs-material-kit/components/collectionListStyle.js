const collectionListStyle = {
	moreActionBox: {
		width: "35px",
		height: "35px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		bottom: "5px",
		right: "5px",

		'&:hover': {
			color: "#3c4858"
		}
	},
	actionList: {
		display: "flex",
		flexDirection: "column",

		'& .action-item': {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			borderBottom: "1px solid rgb(229, 232, 235)",
			cursor: "pointer",

			'&:hover': {
				transition: "all 0.2s ease 0s",
				boxShadow: "rgb(4 17 29 / 25%) 0px 0px 8px 0px",
				backgroundColor: "rgb(251, 253, 255)"
			},

			'& .action-icon': {
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "60px",
				height: "40px",
			},

			'& .action-label': {
				flex: 1,
				minWidth: "100px",
				fontWeight: 500,
				fontSize: "20px"
			}
		}
	},
	items: {
		listStyle: 'none',
		padding: 0,
		grid: 'none/repeat(auto-fit,minmax(160px,200px))',
		justifyContent: 'center',
		alignItems: 'start',
		gap: '32px',
		margin: '32px',
		fontSize: '13px',
		display: 'grid',

		"@media (max-width: 496px)": {
			grid: 'none/repeat(auto-fit,calc(50vw - 39px))',
			gap: '16px',
			margin: '32px 16px'
		},

		'& li:hover': {
			boxShadow: '0 0 0 2px #228be6'
		},

		'& li': {
			background: '#212529',
			contain: 'none',
			borderRadius: '8px',
			position: 'relative',
			boxShadow: '0 2px 8px rgb(0 0 0 / 40%)',

			'&>a': {
				color: '#f8f9fa',
				padding: 0,
				textDecoration: 'none',
				display: 'block',
				overflow: 'hidden',

				'&:hover .media img': {
					webkitTransform: "scale(1.1)",
					transform: "scale(1.1)"
				},
			},

			'&:hover': {
				boxShadow: "0 0 0 2px #228be6",
				borderRadius: '8px'
			},

			'&.selected': {
				boxShadow: "0 0 0 2px #228be6",
				borderRadius: '8px',

				'&:after': {
					content: '" "',
					width: '24px',
					height: '24px',
					background: 'url(/img/verified.svg) 0 0/contain',
					position: 'absolute',
					top: '-6px',
					right: '-6px'
				}
			}
		},

		'& .media': {
			width: 'auto',
			height: '200px',
			background: 'rgba(0,0,0,.4)',
			borderRadius: '8px 8px 0 0',
			justifyContent: 'center',
			display: 'flex',
			overflow: 'hidden',

			"@media (max-width: 496px)": {
				height: 'calc(50vw - 24px)'
			},

			'& img': {
				width: '100%',
				height: '100%',
				objectFit: 'contain',
				margin: 'auto',
				transition: '-webkit-transform .2s,transform .2s'
			}
		},

		'& .meta': {
			whiteSpace: 'nowrap',
			background: '#212529',
			borderRadius: '0 0 8px 8px',
			padding: '16px'
		},

		'& .chain': {
			color: '#e4f1ff',
			display: 'flex',
			marginBottom: '4px',
			fontSize: '10px',

			'&>div': {
				margin: '0 5px 0 0 !important',
				color: '#e4f1ff'
			},

			'& img': {
				width: '12px',
				height: '12px',
				verticalAlign: '-2px',
				display: 'inline'
			}
		},

		'& .name': {
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			fontWeight: 700,
			overflow: 'hidden'
		},

		'& .counters': {
			color: '#e4f1ff',
			marginTop: '4px',
			fontSize: '10px'
		},

		'& .btn': {
			textAlign: 'center',

			// '& button': {
			// 	background: 'linear-gradient(-10deg,#7048EA,#ae3ec9)',
			// 	color: '#ffffff',
			// 	padding: '6px 16px',
			// 	cursor: 'pointer',
			// 	border: 0,
			// 	borderRadius: '32px'
			// }
		}
	}
};

export default collectionListStyle;
