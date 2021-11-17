// import { select, forceSimulation, forceX, forceY } from 'd3'
import { select, forceSimulation } from 'd3'

const BubbleData = [
  {
    fx: 360,
    fy: 100,
    size: 300,
  },
  {
    fx: 230,
    fy: 80,
    size: 240,
  },
  {
    fx: 240,
    fy: 240,
    size: 230,
  },
  {
    fx: 400,
    fy: 40,
    size: 160,
  },
  {
    fx: 80,
    fy: 80,
    size: 140,
  },
  {
    fx: 580,
    fy: 100,
    size: 170,
  },
  {
    fx: 70,
    fy: 270,
    size: 150,
  },
  {
    fx: 650,
    fy: 200,
    size: 200,
  },
  {
    fx: 550,
    fy: 260,
    size: 180,
  },
  {
    fx: 750,
    fy: 100,
    size: 150,
  },
]

class Bubbles {
  root: any
  vm: any
  width: number
  height: number
  svg: any
  force: any

  constructor(root: any, vm: any) {
    this.root = select(root)
    this.vm = vm
    this.width = 1000
    this.height = 600
    this.svg = this.root
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', [0, 0, this.width, this.height].join(','))
  }

  clearActiveBubble() {
    this.svg.selectAll('.field-bubble-container').each((d: any, i: any, g: any) => {
      select(g[i]).classed('selected-bubble-container', false)
    })
  }
  setNodes(data: any[]) {
    this.svg.selectAll('g').remove()

    this.force = forceSimulation()
      // .force('forceX', forceX().x((d) => BubbleData[d.index].fx))
      // .force('forceY', forceY().y((d) => BubbleData[d.index].fy))
      .nodes(
        data.map((item: any, index: any) => {
          item.fx = BubbleData[index].fx
          item.fy = BubbleData[index].fy
          return item
        })
      )
      .on('tick', () => {
        this.svg.selectAll('g').attr('transform', (d: any) => `translate(${d.x}, ${d.y})`)
      })
    //设置力导图中心点

    this.svg
      .selectAll('g')
      .data(this.force.nodes())
      .join('g')
      .attr('class', 'data-bubble')
      .each((d: any, i: any, g: any) => {
        const fieldBubble = select(g[i])
          .append('foreignObject')
          .attr('width', BubbleData[i].size)
          .attr('height', BubbleData[i].size)
          .append('xhtml:div')
          .attr('class', 'field-bubble-container')
          .classed('selected-bubble-container', i === 0 && data[0] ? true : false)
        if (data[i]) {
          fieldBubble
            .append('p')
            .attr('data-index', i)
            .text(data[i].name)
            .on('click', () => {
              this.clearActiveBubble()
              // this.vm.triggerClick(data[i])
              console.log('click: ', data[i])
              fieldBubble.classed('selected-bubble-container', true)
            })
            .on('mouseenter', e => {
              // this.vm.triggerTooltip(data[i], {
              //   x: e.pageX + 5,
              //   y: e.pageY + 5,
              // })
              console.log('pageX pageY: ', e.pageX, e.pageY)
            })
            .on('mouseleave', () => {
              // this.vm.triggerCancelTooptip()
            })
        }
      })
  }
}

export default Bubbles
