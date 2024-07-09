import React from 'react';
import styles from "./Filter.module.css"
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react'

const Filter = ({category, setCategory, prices, setPrices, ...props}) => {

  return (
      <div {...props} className={styles.filter}>

        <Accordion defaultIndex={[0, 1]} allowMultiple>
          <AccordionItem marginBottom={30}>
            <h2>
              <AccordionButton w="100%" h={50} background={"#7AC751"}>
                <Box as="span" flex='1' textAlign='center' color={'#FFFFFF'} fontWeight={500} fontSize={18} pl={20} h={50} display="flex" alignItems="center" justifyContent="center">
                  PRICE
                </Box>
                <AccordionIcon color={"#ffffff"} w={20} h={20} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} background="#F7F8FA">
              <div className={styles.price__inputs}>
                <input 
                  value={prices.min}
                  onChange={e => setPrices({...prices, min: e.target.value})}
                  placeholder="min" 
                  type="number" 
                  className={styles.price__input} 
                  style={{borderRight: "1px solid #DEDEDE"}} 
                />
                <input 
                  value={prices.max}
                  onChange={e => setPrices({...prices, max: e.target.value})}
                  placeholder="max" 
                  type="number" 
                  className={styles.price__input} 
                />
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton w="100%" h={50} background={"#7AC751"}>
                <Box as="span" flex='1' textAlign='center' color={'#FFFFFF'} fontWeight={500} fontSize={18} pl={20} h={50} display="flex" alignItems="center" justifyContent="center">
                  CATEGORIES
                </Box>
                <AccordionIcon color={"#ffffff"} w={20} h={20} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} overflow="auto" h={420} className={styles.categoriesBlock}>

              <div className={styles.categories}>
                {
                  CATEGORIES.map((item, i) => 
                    <div 
                      key={i}
                      style={category===item ? {background: "#e0e0e0"} : {}} 
                      className={styles.categories__item}
                      onClick={() => setCategory(item)}
                    >{item}</div>
                  )
                }
              </div>

            </AccordionPanel>
          </AccordionItem>
        </Accordion>

      </div>
  )
}

export default Filter



const CATEGORIES = [
  "All",
  "Smartphones",
  "Laptops",
  "Fragrances",
  "Skincare",
  "Groceries",
  "Home-decoration",
  "Furniture",
  "Tops",
  "Womens-dresses",
  "Womens-shoes",
  "Mens-shirts",
  "Mens-shoes",
  "Mens-watches",
  "Womens-watches",
  "Womens-bags",
  "Womens-jewellery",
  "Sunglasses",
  "Automotive",
  "Motorcycle",
  "Lighting"
]