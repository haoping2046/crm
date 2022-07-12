import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useFormStyles = makeStyles((theme: Theme) =>
    createStyles({
        buttonGroup: {
            '& > *': {
                margin: theme.spacing(4, 2, 0, 0),
            },
        },
        title: {
            marginBottom: 20,
        },
        form: {
            width: 600,
            margin: 'auto',
            marginTop: 14,
            paddingLeft: 14,
            '& .MuiTextField-root': {
                margin: theme.spacing(0, 0, 3, 0),
                width: 500,
            },

        }
    }),
);