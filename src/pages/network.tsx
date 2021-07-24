import Head from 'next/head';
import React from 'react';
import 'twin.macro';

import Graph from 'react-graph-vis';

import graph from '../data/voice_single_mother_2020_08_word_net.json';
/*
interface INode {
  id: number;
  label: string;
  title: string;
}
interface IEdge {
  from: number;
  to: number;
}
interface IGraph {
  nodes: INode[];
  edges: IEdge[];
}
const graph: IGraph = {
  nodes: [...Array(50)].map((_, i) => {
    return {
      id: i,
      label: `label ${i}`,
      title: `title ${i}`,
    };
  }),
  edges: [...Array(50)].map((_, i) => {
    return {
      from: i,
      to: Math.floor(Math.random() * 50),
      length: Math.floor(Math.random() * 100),
    };
  }),
};
*/

const NetworkDiagram = () => {
  return <Graph graph={graph} />;
};

const Network: React.VFC = () => {
  return (
    <>
      <Head>
        <title>貧困可視化プロトタイプ：ネットワーク</title>
      </Head>
      <div tw='h-full flex flex-col m-4 p-4 rounded bg-gray-600'>
        <div tw='h-64 w-full'>
          <h1 tw='text-5xl text-white font-bold'>
            貧困可視化プロトタイプ：ネットワーク
          </h1>
        </div>
        <div tw='h-full w-full'>
          <NetworkDiagram />
        </div>
      </div>
    </>
  );
};

export default Network;
