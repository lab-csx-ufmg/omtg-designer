<COMMENT>
CREATE OR REPLACE TRIGGER val_disjoint_gen_<VAL_DISJOINT_GEN_NAME>
   BEFORE INSERT OR UPDATE ON <SUBCLASS_TABLE_NAME>
   REFERENCING NEW AS NEW OLD AS OLD
   FOR EACH ROW
DECLARE
   n NUMBER;
BEGIN

<SELECTS>
END;
/