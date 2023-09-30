let template = `
        <template id='userInfo'>
          <style>
            .user-info{
              width:100px;
              height:100px;
              background-color:blue;
            }
          </style>
          <div class='user-info'>
            <p>username</p>
            <p>password</p>
          </div>
        </template>
      `
const parser = new DOMParser()
const doc = parser.parseFromString(template, "text/html")
const temp = doc.getElementById("userInfo")
class userInfo extends HTMLElement {
	constructor() {
		super()
		const shadow = this.attachShadow({ mode: "closed" })
		const content = temp.content.cloneNode(true)
		shadow.append(content)
	}
}
customElements.define("user-info", userInfo)
export default userInfo
