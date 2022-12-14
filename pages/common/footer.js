import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Footer = (props) => {
	return (
		<footer>
			<Container className="footer-main">
				<Row className="footer-block">
					<Col lg="3" md="6">
						<div className="footer-title footer-mobile-title">
							<h3>About</h3>
						</div>
						<div className="about-payment footer-contant">
							<div className="logo">
								<Link href="/landing">
									<a href="#">
										<img
											src="/assets/images/logo/landing-logo.png"
											alt="logo"
										/>
									</a>
								</Link>
							</div>
							<p>
								Contrary to popular belief, Lorem Ipsum is not simply random
								text. It has roots in a piece Lorem fugit on looked ipsum.
							</p>
							<ul className="social-group">
								<li>
									<a
										className="icon-btn btn-google button-effect btn-sm"
										href="https://www.facebook.com/"
									>
										<i className="fa fa-facebook"></i>
									</a>
								</li>
								<li>
									<a
										className="icon-btn btn-twiter button-effect btn-sm"
										href="https://twitter.com/"
									>
										<i className="fa fa-twitter"></i>
									</a>
								</li>
								<li>
									<a
										className="icon-btn btn-linkedin button-effect btn-sm"
										href="https://www.linkedin.com/"
									>
										<i className="fa fa-linkedin"></i>
									</a>
								</li>
								<li>
									<a
										className="icon-btn btn-instagram button-effect btn-sm"
										href="https://www.instagram.com/"
									>
										<i className="fa fa-instagram"></i>
									</a>
								</li>
							</ul>
						</div>
					</Col>
					<Col lg="2" md="3">
						<div className="links">
							<div className="footer-title">
								<h3>Useful Links</h3>
							</div>
							<div className="footer-contant">
								<ul>
									<li>
										<Link href="/messenger">Home</Link>
									</li>
									<li>
										<Link href="/bonus/about">About us</Link>
									</li>
									<li>
										<Link href="/bonus/faq">FAQ</Link>
									</li>
									<li>
										<Link href="/bonus/elements">Elements</Link>
									</li>
								</ul>
							</div>
						</div>
					</Col>
					<Col lg="2" md="3">
						<div className="links">
							<div className="footer-title">
								<h3>Blog Links</h3>
							</div>
							<div className="footer-contant">
								<ul>
									<li>
										<Link href="/blog/noSidebar">No sidebar</Link>
									</li>
									<li>
										<Link href="/blog/leftSidebar">Left sidebar</Link>
									</li>
									<li>
										<Link href="/blog/rightSidebar">Right sidebar</Link>
									</li>
									<li>
										<Link href="/blog/detailSidebar">Details page</Link>
									</li>
								</ul>
							</div>
						</div>
					</Col>
					<Col lg="2" md="4">
						<div className="links">
							<div className="footer-title">
								<h3>Authentication</h3>
							</div>
							<div className="footer-contant">
								<ul>
									<li>
										<Link href="/auth/signIn">Signin</Link>
									</li>
									<li>
										<Link href="/auth/signInClassic">Signin classic</Link>
									</li>
									<li>
										<Link href="/auth/signUp">Signup</Link>
									</li>
									<li>
										<Link href="/auth/signUpClassic">Signup classic</Link>
									</li>
								</ul>
							</div>
						</div>
					</Col>
					<Col lg="3" md="4">
						<div className="downlaod">
							<div>
								<div className="footer-title">
									<h3>Download Apps</h3>
								</div>
								<div className="footer-contant">
									<div className="footer-btn">
										<a className="btn active" href="https://www.apple.com/in/itunes/" target="_blank">
											<i className="fa fa-apple"></i>
											<div>
												<h6>Available on the</h6>
												<h4>App store</h4>
											</div>
										</a>
										<a className="btn" href="https://play.google.com/store" target="_blank">
											<i className="fa fa-play"></i>
											<div>
												<h6>Available on the</h6>
												<h4>Google play</h4>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<div className="footer-back-block">
				<img
					className="img-fluid inner1"
					src="/assets/images/landing/footer/2.png"
					alt="footer-back-img"
				/>
				<img
					className="img-fluid inner2"
					src="/assets/images/landing/footer/2.png"
					alt="footer-back-img"
				/>
			</div>
			<Container className="copyright-footer">
				<Row className="copyright">
					<Col md="6" sm="12">
						<p className="footer-left">?? 2022 Chitchat. All Rights Reserved</p>
					</Col>
					<Col md="6" sm="12" className="links_horizontal">
						<p className="text-end">
							Made with <span>&hearts; </span>By Theme Pixelstrap
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
