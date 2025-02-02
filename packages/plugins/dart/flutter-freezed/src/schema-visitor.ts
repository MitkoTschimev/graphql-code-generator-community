import {
  EnumTypeDefinitionNode,
  GraphQLSchema,
  InputObjectTypeDefinitionNode,
  ObjectTypeDefinitionNode,
  UnionTypeDefinitionNode,
} from 'graphql';
import { FlutterFreezedPluginConfig } from './config/plugin-config.js';
import { Block } from './freezed-declaration-blocks/index.js';
import { NodeRepository } from './freezed-declaration-blocks/node-repository.js';

export const schemaVisitor = (_schema: GraphQLSchema, config: FlutterFreezedPluginConfig) => {
  const nodeRepository = new NodeRepository();
  return {
    nodeRepository,

    EnumTypeDefinition: (node: EnumTypeDefinitionNode) => Block.build(config, node, nodeRepository),

    UnionTypeDefinition: (node: UnionTypeDefinitionNode) => Block.build(config, node, nodeRepository),

    ObjectTypeDefinition: (node: ObjectTypeDefinitionNode) => Block.build(config, node, nodeRepository),

    InputObjectTypeDefinition: (node: InputObjectTypeDefinitionNode) => Block.build(config, node, nodeRepository),
  };
};
