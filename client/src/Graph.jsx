import React from 'react';
import styled from 'styled-components';
import Bar from './Bar.jsx';
import $ from 'jquery';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      count: 0,
      rating: ''
    };
  }

  componentDidMount() {
    this.getGraphData();
  }

  getGraphData() {
    $.ajax({
      url: 'http://localhost:3005/graph',
      method: 'GET',
      success: results => {
        this.setState({
          data: results.data,
          rating: results.rating,
          count: results.count
        });
      },
      error: () => console.error('Couldn\t pull graph data')
    });
  }

  render() {
    const w = 605;
    const h = 260;
    const buffer = 20;
    const bufferedHeight = h - 2 * buffer;
    const bufferedWidth = w - 2 * buffer;
    const maxRecommended = Math.max(...this.state.data.map(d => d.recommended));
    const maxNotRecommended = Math.max(...this.state.data.map(d => d.notRecommended));
    const maxHeight = maxRecommended + maxNotRecommended;
    const recommendedHeight = maxRecommended / maxHeight * bufferedHeight;
    const notRecommendedHeight = maxNotRecommended / maxHeight * bufferedHeight;
    const barWidth = bufferedWidth / this.state.data.length * .75;
    const barMargin = bufferedWidth / this.state.data.length * .25;
    return (
      <GraphWrapper>
        <RatingContainer width={w}>
          <TextContainer>
            <SectionTitle>Overall Reviews:</SectionTitle>
            <SectionRating>Very Positive</SectionRating>
          </TextContainer>
        </RatingContainer>
        <ChartWrapper>
          <Recommended height={recommendedHeight + buffer} width={w}>
            {
              this.state.data.map(data => <Bar reverse={false} height={data.recommended / maxRecommended * recommendedHeight} width={barWidth} barMargin={barMargin} />)
            }
          </Recommended>
          <NotRecommended height={notRecommendedHeight + buffer} width={w}>
            {
              this.state.data.map(data => <Bar reverse={true} height={data.notRecommended / maxNotRecommended * notRecommendedHeight} width={barWidth} barMargin={barMargin} />)
            }
          </NotRecommended>
        </ChartWrapper>
      </GraphWrapper>
    );
  }
}
const GraphWrapper = styled.div``;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${props => props.width + 'px'};
  height: 60px;
  margin-bottom: 1px;
  background: #29475e;
  border-bottom: 1px solid #000000;
  min-height: 38px;
`;

const TextContainer = styled.div`
  margin-left: 10px;
`;


const SectionTitle = styled.div`
  align-items: center;
  justify-content: flex-start;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  font-size: 15px;
  margin-bottom: 5px;
  color: #e5e5e5;
`;

const SectionRating = styled.div`
  color: #66C0F4;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: bold;
  font-size: 17px;
  line-height: 9px;
  text-shadow: 1px 1px rgba( 0, 0, 0, 0.2 )
`;

const Recommended = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: #29475e;
  height: ${props => props.height + 'px'};
  width: ${props => props.width + 'px'};
`;

const NotRecommended = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #29475e;
  height: ${props => props.height + 'px'};
  width: ${props => props.width + 'px'};
`;

const ChartWrapper = styled.div``;
export default Graph;