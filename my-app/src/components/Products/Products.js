import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Products from '../../Products.json';


export default function Product() {
  const [product , setProduct] = useState(Products);

  return (
<div style={{display:'grid' ,gridTemplateColumns:'repeat(2 , 1fr)',  marginTop:'1rem' , marginLeft:'15%'}}>
    {
      product.map((pro)=>{
        return (<Card sx={{ maxWidth: 345  }}>
          <CardMedia
            sx={{ height: 250 }}
            image={pro.img_url}
            title="green iguana"   
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" textAlign="center">
              {pro.Product_Name}
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              {pro.Price}
            </Typography>
          </CardContent>
          
        </Card>)
      })
    }
    </div>
    
  );
}