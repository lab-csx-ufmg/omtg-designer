<COMMENT>
CREATE TRIGGER val_spa_agr_<VAL_SPA_AGR_NAME>
AFTER INSERT OR UPDATE OR DELETE ON <PART_TABLE_NAME>
   FOR EACH STATEMENT
   EXECUTE PROCEDURE ast_aggregation('<PART_TABLE_NAME>', 'geom', '<WHOLE_TABLE_NAME>', 'geom');

   