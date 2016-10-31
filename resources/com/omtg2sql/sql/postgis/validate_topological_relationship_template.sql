<COMMENT>
CREATE TRIGGER <VAL_TOP_REL_NAME>_<SPATIAL_RELATION_MASK>_insert_update_trigger
  AFTER INSERT OR UPDATE ON <A_TABLE_NAME>
  FOR EACH STATEMENT
  EXECUTE PROCEDURE ast_topologicalrelationship('<A_TABLE_NAME>', 'geom', '<B_TABLE_NAME>', 'geom', '<SPATIAL_RELATION>');

