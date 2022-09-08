import React, { Component } from 'react';
import styled from 'styled-components';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

function DragAndDrop01({ data }) {
  const onDrop = (e) => {
    console.log(e);
  };
  const layout = [
    { i: 'blue-eyes-dragon', x: 0, y: 0, w: 1, h: 1 },
    { i: 'dark-magician', x: 1, y: 0, w: 1, h: 1 },
    { i: 'kuriboh', x: 2, y: 0, w: 1, h: 1 },
    { i: 'spell-caster', x: 3, y: 0, w: 1, h: 1 },
    { i: 'summoned-skull', x: 4, y: 0, w: 1, h: 1 },
  ];

  const GridItemWrapper = styled.div`
    background: lightgray;
  `;

  const GridItemContent = styled.div`
    padding: 8px;
  `;

  const Root = styled.div`
    padding: 16px;
  `;

  return (
    <Root>
      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
        rowHeight={300}
        width={1000}
      >
        {/* <GridLayout layout={layout} cols={6} rowHeight={100} width={1000}> */}
        {data.map((info) => {
            return (
                <GridItemWrapper key={info.ID}>
                <GridItemContent> {info.FESTIVALS2022}</GridItemContent>
                </GridItemWrapper>
                );
            })}
        <GridItemWrapper key="blue-eyes-dragon">
          <GridItemContent>Blue Eyes Dragon</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="dark-magician">
          <GridItemContent>Dark Magician</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="kuriboh">
          <GridItemContent>Kuriboh</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="spell-caster">
          <GridItemContent>Spell Caster</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="summoned-skull">
          <GridItemContent>Summoned Skull</GridItemContent>
        </GridItemWrapper>
      </ResponsiveGridLayout>
      {/* </GridLayout> */}
    </Root>
  );
}

export default DragAndDrop01;
