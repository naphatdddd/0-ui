import React from 'react'
import {
  Grid,
  Chip,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import currencyFormat from 'utils/currencyFormat'
const useStyles = makeStyles((theme) => ({
  media: {
    height: 150,
  },
  footer: {
    marginTop: theme.spacing(2),
  },
}))
function ProductItem({ _id, name, price, category, desc, image }) {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card>
        <CardActionArea>
          <CardMedia image={image} title={name} className={classes.media} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              color="textSecondary"
            >
              {desc}
            </Typography>
            <Grid
              container
              alignItems="center"
              justify="space-between"
              className={classes.footer}
            >
              <span>{currencyFormat(price)}</span>
              <Chip label={category} size="small"></Chip>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ProductItem
