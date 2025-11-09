#  AWS Static Website Hosting Project

##  Overview
This project demonstrates how to host a static website using Amazon S3.  
It includes steps to configure the bucket, enable static website hosting, and make the site publicly accessible.

## AWS Services Used
- Amazon S3 (Static website hosting)
- AWS Management Console

## Why This Project  
- *Cost‑effective & Server‑less*: Using S3 for static hosting removes the need for a dedicated server or managed backend.  
- *Speed & availability*: Static assets are served directly from S3 which is optimized for high availability.  
- *Foundation for cloud skills*: Demonstrates core concepts that scale to more advanced AWS services.

## Where This is Useful  
- Personal portfolios or blogs with minimal dynamic backend.  
- Business landing pages or marketing microsites needing fast load times globally.  
- Learning platform for evolving into more complex cloud deployments (e.g., adding CDN, automation).

## AWS Services Used  
- Amazon S3 (Static website hosting)  
- AWS Management Console  

## Lessons Learned  
- Hosting static websites on AWS S3 is cost‐effective and fast.  
- Understanding S3 bucket policies is crucial for controlling public access.  
- Next logical step: integrate a CDN (CloudFront) for global performance.

## Future Improvements  
- Add a custom domain using Route 53 and enable HTTPS via AWS Certificate Manager.  
- Integrate CloudFront for global caching and improved speed.  
- Set up a CI/CD pipeline to automate site updates (e.g., using GitHub Actions + AWS CLI).  
- Expand the site with interactive elements (forms, dynamic content) to move beyond static.

## Steps Performed
1. Created an S3 bucket and disabled “Block all public access.”
2. Uploaded HTML, CSS, and JS files.
3. Enabled static website hosting in S3 bucket properties.
4. Set up a bucket policy for public read access.
5. Accessed the website using the generated S3 endpoint URL.

##  Live Demo
[Click here to visit the website](http://drey-static-website.s3-website-us-east-1.amazonaws.com)

##  Lessons Learned
- Hosting static websites on AWS S3 is cost-effective and fast.  
- Understanding bucket policies is crucial for managing public access.  
- CloudFront can later be used for faster global delivery.




 *Created by:* Eyamike Audrey  
 *Date:* October 2025
