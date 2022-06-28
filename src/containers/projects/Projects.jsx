
import './project.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Project1 from '../../image/project1.png'
import Project2 from '../../image/project2.png'
import Project3 from '../../image/project3.png'
import Project4 from '../../image/project4.jpg'
import Project5 from '../../image/project5.png'
import Project6 from '../../image/project6.jpg'

export default function Projects() {
    return (
        <div id='projects'>
            <main>
                <div className='project-header'>
                     <h1>Our team has worked on 300+ projects</h1>
                     <h3>Check out our works below</h3>
                </div>

                <div className='card-gallery'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Project1}
                        alt="website"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Project 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, architecto!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Visit Website</Button>
                    </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Project2}
                        alt="website"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Project 2
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur error earum ut! Consectetur, cumque inventore.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Visit Website</Button>
                    </CardActions>
                    </Card>
                    
                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Project3}
                        alt="website"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Project 3
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quam amet hic provident omnis magnam tempore adipisci recusandae necessitatibus ipsa!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Visit Website</Button>
                    </CardActions>
                    </Card>
                    
                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Project4}
                        alt="website"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Project 4
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores excepturi voluptas sit voluptatibus quibusdam! Molestias neque ab inventore modi doloremque!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Visist Website</Button>
                    </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Project5}
                        alt="website"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Project 5
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident distinctio reiciendis amet dignissimos molestias temporibus magnam itaque, corporis numquam libero.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Visit Website</Button>
                    </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Project6}
                        alt="website"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Project 6
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores obcaecati accusantium impedit quidem tempore consequatur, deserunt reprehenderit sunt quos quas.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Visit Website</Button>
                    </CardActions>
                    </Card>
                </div>

            <section className='pricing-sec'>
                <div class="background">
                    <div class="container">
                        <div class="panel pricing-table">
                            
                            <div class="pricing-plan">
                                <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" class="pricing-img" />
                                <h2 class="pricing-header">Personal</h2>
                                <ul class="pricing-features">
                                <li class="pricing-features-item">Custom domains</li>
                                <li class="pricing-features-item">small team dedicated to build your personal app/website</li>
                                </ul>
                                <div className="buy-btn">
                                <span class="pricing-price">Free</span>
                                <a href="#/" class="pricing-button">Buy</a>
                                </div>
                            </div>
                            
                            <div class="pricing-plan">
                                <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" class="pricing-img" />
                                <h2 class="pricing-header">Small team</h2>
                                <ul class="pricing-features">
                                <li class="pricing-features-item">Never sleeps</li>
                                <li class="pricing-features-item">Multiple workers for more powerful apps</li>
                                </ul>
                                <div className="buy-btn2">
                                <span class="pricing-price">$150</span>
                                <a href="#/" class="pricing-button is-featured">Buy</a>
                                </div>
                            </div>
                            
                            <div class="pricing-plan">
                                <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" class="pricing-img" /> 
                                <h2 class="pricing-header">Enterprise</h2>
                                <ul class="pricing-features">
                                <li class="pricing-features-item">Dedicated</li>
                                <li class="pricing-features-item">Best for large Enterprises</li>
                                </ul>
                                <div className="buy-btn3">
                                <span class="pricing-price">$400</span>
                                <a href="#/" class="pricing-button">Buy</a>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </section>
            </main>
        </div>
    )
}
