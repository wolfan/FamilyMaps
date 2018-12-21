// The family appellation.

// 祖先
const ancestor= "父祖曾高天烈太远鼻";
// 后裔
const descendants= "子孙曾玄来晜仍云耳";
// 关系
const cousin= ["祖孙","父子","母子","子女","兄弟","姐妹","表亲","堂亲","妯娌","连襟","祖宗","子孙","五服内","九族内","外人"];

/* 数据
 * 出了五服关系开始使用宗祖关系。
 */
const familyAppellation={
	// 长辈
	elder:{
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[]
	},

	// 平辈
	same:{
		// 兄弟姐妹
		household:{
			// 兄弟
			brothers:{},

			// 姐妹
			sisters:{}
		}

		// 堂亲
		cousin:{},

		// 表亲
		affinity:{},

		// 族亲
		clan:{}

	},

	// 后辈
	junior:{
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[]
	}
}