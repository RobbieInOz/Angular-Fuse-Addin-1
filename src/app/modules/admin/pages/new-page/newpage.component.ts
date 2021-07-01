import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as d3 from "d3";

@Component({
    selector       : 'newpage',
    templateUrl    : './newpage.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class newpageComponent
{
    /**
     * Constructor
     */
    constructor()
    {

    }


//     const championship = [
//         {
//           name: 'Kimi Räikkönen',
//           points: 110,
//         },
//         {
//           name: 'Lewis Hamilton',
//           points: 109,
//         },
//         {
//           name: 'Fernando Alonso',
//           points: 109,
//         },
//         {
//           name: 'Felipe Massa',
//           points: 94,
//         },
//         {
//           name: 'Nick Heidfeld',
//           points: 61,
//         },
//         {
//           name: 'Robert Kubica',
//           points: 39,
//         },
//         {
//           name: 'Heikki Kovalainen',
//           points: 30,
//         },
//         {
//           name: 'Giancarlo Fisichella',
//           points: 21,
//         },
//         {
//           name: 'Nico Rosberg',
//           points: 20,
//         },
//         {
//           name: 'David Coulthard',
//           points: 14,
//         },
//         {
//           name: 'Alexander Wurz',
//           points: 13,
//         },
//         {
//           name: 'Mark Webber',
//           points: 10,
//         },
//         {
//           name: 'Jarno Trulli',
//           points: 8,
//         },
//         {
//           name: 'Sebastian Vettel',
//           points: 6,
//         },
//         {
//           name: 'Jenson Button',
//           points: 6,
//         },
//         {
//           name: 'Ralf Schumacher',
//           points: 5,
//         },
//         {
//           name: 'Takuma Sato',
//           points: 4,
//         },
//         {
//           name: 'Vitantonio Liuzzi',
//           points: 3,
//         },
//         {
//           name: 'Adrian Sutil',
//           points: 1,
//         },
//         {
//           name: 'Rubens Barrichello',
//           points: 0,
//         },
//         {
//           name: 'Scott Speed',
//           points: 0,
//         },
//         {
//           name: 'Kazuki Nakajima',
//           points: 0,
//         },
//         {
//           name: 'Anthony Davidson',
//           points: 0,
//         },
//         {
//           name: 'Sakon Yamamoto',
//           points: 0,
//         },
//         {
//           name: 'Christijan Albers',
//           points: 0,
//         },
//         {
//           name: 'Markus Winkelhock',
//           points: 0,
//         },
//       ];
      
//       // data describing the standings for the f1 drivers who scored at least a point
//       // this to reduce the visual burden introduced by too many data points
//       const data = championship.filter(({ points }) => points > 0);
      
//       // target the prescribed root node and add an svg element
//       let margin = {
//         top: 20,
//         right: 20,
//         bottom: 20,
//         left: 100, // add more white space on the left side of the visualization to display the names
//       };
//     // data describing the standings for the 2007 f1 championship

//   const width = 800 - (this.margin.left + this.margin.right);
//   const height = 550 - (this.margin.top + this.margin.bottom);
  
//   const svg = d3
//     .select('.viz')
//     .append('svg')
//     .attr('viewBox', `0 0 ${this.width + (this.margin.left + this.margin.right)} ${this.height + (this.margin.top + this.margin.bottom)}`)
//     .attr('width', this.width)
//     .attr('height', this.height);
  
//    group = this.svg
//     .append('g')
//     .attr('transform', `translate(${this.margin.left} ${this.margin.top})`);
  
//   // describe a quantitative scale for the x axis, for the racers' points
//   const xScale = d3
//     .scaleLinear()
//     .domain([0, d3.max(this.data, ({ points }) => points)])
//     .range([0, this.width]);
  
//   // describe a qualitative scale for the y axis, for the racers' names
//   const yScale = d3
//     .scaleBand()
//     .domain(this.data.map(({ name }) => name))
//     .range([0, this.height])
//     // padding allows to separate the shapes making use of the scale and the value returned by the yScale.bandwidth() function
//     // 0.2 means 20% is dedicated to white space around the band
//     .padding(0.2);
  
//   // add axes describing the values
//   const xAxis = d3
//     .axisBottom(this.xScale);
  
//   const yAxis = d3
//     .axisLeft(this.yScale);
  
    
// //   group
// //     .append('g')
// //     .attr('transform', `translate(0 ${height})`)
// //     .call(xAxis);
  
//   group
//     .append('g')
//     .call(yAxis);
  
//   // include a group element for each data point, to nest connected elements
//    groups = group
//     .selectAll('g.group')
//     .data(data, ({ name }) => name)
//     .enter()
//     .append('g')
//     .attr('class', 'group')
//     // translate the group vertically according to the y scale
//     .attr('transform', ({ name }) => `translate(0 ${yScale(name)})`);
  
//   // for each data point add a rectangle describing the points awarded to the respective racer
//   groups
//     .append('rect')
//     .attr('x', 0)
//     .attr('y', 0)
//     .attr('width', ({ points }) => xScale(points))
//     .attr('height', yScale.bandwidth());
  




}
