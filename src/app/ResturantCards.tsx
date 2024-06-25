import React, { Component, useState } from 'react';
import ResturantCard from './components/ResturantCard';
import CachedIcon from '@mui/icons-material/Cached';
import { IntegerType } from 'mongodb';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function RestaurantCards(){    
    // call getActiveRestaurants()
    const activeRestaurants = [
        {
            "restaurantId": "popeyes",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        },
        {
            "restaurantId": "popeyes",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        },
        {
            "restaurantId": "popeyes",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        },
        {
            "restaurantId": "popeyes",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        },
        {
            "restaurantId": "popeyes",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        },
        {
            "restaurantId": "popeyes",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        },
        {
            "restaurantId": "popeyes",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        },
        {
            "restaurantId": "popeyes",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        },
        {
            "restaurantId": "popeyes",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        },
        {
            "restaurantId": "popeyes",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        },
        {
            "restaurantId": "popeyes",
            "name": "popeyes",
            "categories": ["Jamaican"],
            "starRating": 3.5,
            "photoSrc": "https://tb-static.uber.com/prod/image-proc/processed_images/7f5f084a435fb7f3e8ef93d187e34642/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        }
    ]

    const [expand, setExpand] = useState(true);
  const [selected, setSelected] = useState(new Array(activeRestaurants.length).fill(false));

  const toggleSelection = (index: number) => {
    if (selected.filter((s) => s).length === 5 && !selected[index]) {
      return;
    }
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
    console.log(index)
  };

  const selectedColor = "rgb(210, 169, 29)";
  const wfColor = "rgb(70,62,188)"
  const numSelected = selected.filter((s) =>s).length;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setExpand(!expand);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
      <div className="flex w-full justify-between flex-col">
          <div className="flex w-full pb-4">
              {
                  activeRestaurants.slice(0,5).map((resturant, index) => (
                      <div onClick={()=>toggleSelection(index)} className={`transition duration-1000 ease-in-out w-auto ${(expand && !selected[index]) && `translate-x-[100em] translate-y-[18em]`}`}>
                      <ResturantCard key={index} name={resturant["name"]} imagePath={resturant["photoSrc"]} rating={resturant["starRating"]} cuisine={resturant["categories"][0]} borderColor={selected[index]? selectedColor: wfColor}/>
                      </div>
                  ))
              }
              <div className="mt-[15em]">{!expand ? <div className="w-24 bg-indigo-500 text-3xl" onClick={() => handleClickOpen()}>SUBMIT</div> : <div className="w-24 bg-indigo-500 text-3xl" onClick={() => setExpand(!expand)}>DRAW CARDS</div>}</div>
          </div>
          <div className="flex w-full">
            {
                  activeRestaurants.slice(5,10).map((resturant, index) => (
                      <div  onClick={()=>toggleSelection(index + 5)} className={`transition duration-1000 ease-in-out w-auto ${(expand && !selected[index + 5]) && `translate-x-[100em]`}`}>
                        <ResturantCard key={index + 5} name={resturant["name"]} imagePath={resturant["photoSrc"]} rating={resturant["starRating"]} cuisine={resturant["categories"][0]} borderColor={selected[index + 5]? selectedColor: wfColor}/>
                      </div>
                  ))
              }  
          </div>

          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Confirm"}</DialogTitle>
            <DialogActions>
              <Button onClick={handleClose}>No</Button>
              <Button onClick={handleClose}>Yes</Button>
            </DialogActions>
          </Dialog>
      </div>

    )
  }
export default RestaurantCards;

