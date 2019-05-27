import React from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.draw();
  }

  draw() {
    console.log('trying here');
    const data = [12, 5, 6, 6, 9, 10, 5, 6, 6, 9, 10, 5, 6, 6, 9, 10, 5, 6, 6, 9, 10];
    const w = 600;
    const h = 250;
    const recommended = d3.select('.graph')
      .append('svg')
      .attr('width', w)
      .attr('height', h)
      .style('margin-left', 100);

    const notRecommended = d3.select('.graph')
      .append('svg')
      .attr('width', w)
      .attr('height', h)
      .style('margin-left', 100);
                  
    recommended.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (w / data.length))
      .attr('y', (d, i) => h - 10 * d)
      .attr('width', w / data.length - 5)
      .attr('height', (d, i) => d * 10)
      .attr('fill', '#64bcef');
                  
    notRecommended.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (w / data.length))
      .attr('y', 0)
      .attr('width', w / data.length - 5)
      .attr('height', (d, i) => d * 10)
      .attr('fill', '#a34c25');

      
  }

  render() {
    return <BarChart className='graph' />;
  }
}

const BarChart = styled.div`
  display: block;
  background: #29475e;
`;
export default Graph;