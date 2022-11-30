import { Random } from 'mockjs'
import './style.scss'

const app = document.querySelector('#app')
const createImage = async () => {
  Array(10)
    .fill(null)
    .map((v, i) => {
      const html = `
				<div>
				<img src="/images/${i + 1}.jpg"/>
				<span>${Random.csentence(20)}</span>
  			<p>${Random.cparagraph(2)}</p>
				</div>
			`
      app?.insertAdjacentHTML('afterbegin', html)
    })
}

for (let i = 0; i < 10; i++) createImage()
