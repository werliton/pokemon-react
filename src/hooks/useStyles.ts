import { createStyles, makeStyles } from "@material-ui/core";
import { StyleRules } from '@material-ui/styles/withStyles';

const useStyles = (styles: StyleRules<{}, string>) => makeStyles(() => createStyles(styles))();

export { useStyles };