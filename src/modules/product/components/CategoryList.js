import React from 'react'
import CategoryItem from './CategoryItem'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  Headset,
  Watch,
  CameraAlt,
  Nature,
  Computer,
  Book,
  InvertColors,
  Visibility,
} from '@material-ui/icons'
const CATEGORIES = [
  {
    title: 'Headset',
    Icon: Headset,
  },
  {
    title: 'Watch',
    Icon: Watch,
  },
  {
    title: 'CameraAlt',
    Icon: CameraAlt,
  },
  {
    title: 'Nature',
    Icon: Nature,
  },
  {
    title: 'Computer',
    Icon: Computer,
  },
  {
    title: 'Book',
    Icon: Book,
  },
  {
    title: 'InvertColors',
    Icon: InvertColors,
  },
  {
    title: 'Visibility',
    Icon: Visibility,
  },
]
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}))
function CategoryList() {
  const classes = useStyles()
  return (
    <Grid container justify="center" spacing={2} className={classes.root}>
      {CATEGORIES.map((category) => (
        <CategoryItem key={category.title} {...category}></CategoryItem>
      ))}
    </Grid>
  )
}

export default CategoryList
