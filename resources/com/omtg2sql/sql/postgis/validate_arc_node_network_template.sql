<COMMENT>
CREATE TRIGGER <VAL_NETWOK_NAME>_arc_trigger
  AFTER INSERT OR UPDATE ON <ARC_TABLE_NAME>
  FOR EACH STATEMENT
  EXECUTE PROCEDURE ast_arcnodenetwork('<ARC_TABLE_NAME>', 'geom', '<NODE_TABLE_NAME>', 'geom');
  
  