import React from 'react';
import styled from 'styled-components';
import Bar from './Bar.jsx';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          date: 'Jan 2018',
          recommended: 12,
          notRecommended: 8
        },
        {
          date: 'Feb 2018',
          recommended: 16,
          notRecommended: 4
        },
        {
          date: 'Mar 2018',
          recommended: 26,
          notRecommended: 13
        },
        {
          date: 'April 2018',
          recommended: 20,
          notRecommended: 10
        },
        {
          date: 'May 2018',
          recommended: 30,
          notRecommended: 8
        },
        {
          date: 'June 2018',
          recommended: 25,
          notRecommended: 4
        },
        {
          date: 'July 2018',
          recommended: 12,
          notRecommended: 6
        },
        {
          date: 'Aug 2018',
          recommended: 21,
          notRecommended: 7
        },
        {
          date: 'Sept 2018',
          recommended: 10,
          notRecommended: 10
        },
        {
          date: 'Oct 2018',
          recommended: 16,
          notRecommended: 3
        },
        {
          date: 'Nov 2018',
          recommended: 30,
          notRecommended: 8
        },
        {
          date: 'Dec 2018',
          recommended: 35,
          notRecommended: 5
        },
        {
          date: 'Jan 2019',
          recommended: 12,
          notRecommended: 8
        },
        {
          date: 'Feb 2019',
          recommended: 16,
          notRecommended: 4
        },
        {
          date: 'Mar 2019',
          recommended: 26,
          notRecommended: 13
        },
        {
          date: 'April 2019',
          recommended: 20,
          notRecommended: 10
        },
        {
          date: 'May 2019',
          recommended: 30,
          notRecommended: 8
        },
        {
          date: 'June 2019',
          recommended: 25,
          notRecommended: 4
        },
        {
          date: 'July 2019',
          recommended: 12,
          notRecommended: 6
        },
        {
          date: 'Aug 2019',
          recommended: 21,
          notRecommended: 7
        },
        {
          date: 'Sept 2019',
          recommended: 10,
          notRecommended: 10
        },
        {
          date: 'Oct 2019',
          recommended: 16,
          notRecommended: 3
        },
        {
          date: 'Nov 2019',
          recommended: 30,
          notRecommended: 8
        },
        {
          date: 'Dec 2019',
          recommended: 35,
          notRecommended: 5
        }
      ]   
    };
  }

  componentDidMount() {
  }

  render() {
    const w = 605;
    const h = 260;
    const buffer = 20;
    const bufferedHeight = h - 2 * buffer;
    const maxRecommended = Math.max(...this.state.data.map(d => d.recommended));
    const maxNotRecommended = Math.max(...this.state.data.map(d => d.notRecommended));
    const maxHeight = maxRecommended + maxNotRecommended;
    const recommendedHeight = maxRecommended / maxHeight * bufferedHeight;
    const notRecommendedHeight = maxNotRecommended / maxHeight * bufferedHeight;
    const barWidth = w / this.state.data.length * .75;
    const barMargin = w / this.state.data.length * .25;
    return (
      <GraphWrapper>
        <RatingContainer width={w}>
          <SectionTitle>Overall Reviews:</SectionTitle>
          <SectionRating>Very Positive</SectionRating>
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
  
  width: ${props => props.width + 'px'};
  height: 60px;
  margin-bottom: 1px;
  background: #29475e;
  border-bottom: 1px solid #000000;
  min-height: 38px;
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