'use client';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

const BlogDetailPage = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto flex flex-wrap mt-10" style={{ width: '90%' }}>
      {/* Left Sidebar */}
      <div className="w-full sm:w-1/3 p-4 hidden sm:block">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-3 border border-gray-300 rounded-lg"
          />
        </div>
        
        <div className='border border-gray-300 p-3 rounded-md'>
          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold pb-3 mb-6 w-[180px] border-b-2">Categories</h3>
            <ul>
              <li className="mb-2"><Link href="#">Technology</Link></li>
              <li className="mb-2"><Link href="#">Business</Link></li>
              <li className="mb-2"><Link href="#">Lifestyle</Link></li>
              <li className="mb-2"><Link href="#">Design</Link></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="mb-6">
            <h3 className="text-xl w-[180px] font-semibold pb-3 mb-6 border-b-2">Recent Posts</h3>
            <ul>
              {[...Array(3)].map((_, index) => (
                <div key={index} className="text-gray-700 w-full p-3 pl-0">
                  <div className="flex items-center mb-2">
                    <div className="bg-gray-200 h-[100px] rounded-md w-[103px] flex items-center justify-center text-xl text-gray-600">
                      100x103
                    </div> 
                    <div className="ml-3">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400 mr-2" />
                        <span className="text-[16px]">27, Jun 2022</span>
                      </div>
                      <a className="text-lg text-[1.125rem]">Lorem ipsum dolor amet conse adip</a>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </div>

          {/* Archives */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold pb-3 mb-6 w-[180px] border-b-2">Archives</h3>
            <ul>
              <li className="mb-2"><Link href="#">March 2018</Link></li>
              <li className="mb-2"><Link href="#">January 2021</Link></li>
              <li className="mb-2"><Link href="#">September 2019</Link></li>
              <li className="mb-2"><Link href="#">July 2021</Link></li>
              <li className="mb-2"><Link href="#">February 2018</Link></li>
            </ul>
          </div>

          {/* Popular Tags */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold pb-3 mt-12 mb-6 w-[180px] border-b-2">Popular Tags</h3>
            <div className="flex flex-wrap">
              {["Mobile", "Laptop", "Smart TV"].map((tag) => (
                <button key={tag} className="bg-white text-gray-800 border border-gray-300 rounded-full px-3 py-1 text-sm mr-2 mb-2 hover:bg-blue-500 hover:text-white transition-colors">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full sm:w-2/3 p-4">
        {/* Blog Image */}
        <div className="mb-6">
          <img src="https://via.placeholder.com/750x459" alt="Blog Post Image" className="w-full h-auto" />
        </div>

        {/* Blog Meta Info */}
        <div className="mb-2 flex items-center space-x-4 text-sm text-black">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400 mr-2" />
            27, Jun 2030
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faUser} className="text-blue-400 mr-2" />
            Elmer Schmidt
          </div>
        </div>

        {/* Blog Title */}
        <h1 className="text-3xl font-semibold mb-6">10 Principles of Psychology You Can Use to Improve Your Smart Product</h1>

        {/* Blog Content */}
        <div className="text-gray-700 mb-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Author Section */}
        <div className="bg-blue-600 p-10 rounded-lg mb-6">
          <p className="text-white text-xl mb-3 ">Lorem ipsum dolor sit amet, consectetur adipisici elit sed do eiusmod tempor incididunt ut</p>
          <p className="text-white text-xl font-semibold">- Elmer Schmidt</p>
        </div>

        <div className="text-gray-700 w-full pr-4 mb-10">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eto dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcol laboris nisi ut aliquipp ex ea commodo consequat. Duis aute irure dolor in reprehenderit inloifk voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <div className="flex flex-wrap mb-6">
          {/* Additional Blog Content */}
          <div className="text-gray-700 w-full sm:w-2/3 pr-4">
            <p>
              Lorem ipsum dolor sit amet, consec adipisic elit, sed do eius tempor incididu ut labore et dolore ma aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nil ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat velit esse cillum dolore
            </p>
            <p className='mt-10'>
              leu fugiat nulla pariatur. Excepteur sintocca cupidatat non proident, sunt in culpa qui off deserunt mollit anim id est laborum. Sed utl perspiciatis unde omnis iste natus error sit voluptatem accusantium
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="w-full sm:w-1/3 flex justify-end">
            <div className="w-[370px] h-[400px] bg-gray-200 text-center flex items-center justify-center text-xl text-gray-600">
              370x400
            </div>
          </div>
        </div>

        <div className="text-gray-700 w-full pr-4 mb-10">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eto dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcol laboris nisi ut aliquipp ex ea commodo consequat. Duis aute irure dolor in reprehenderit inloifk voluptate velit esse cillum eu fugiat nulla pariatur.
          </p>
        </div>

        <div className="container mx-auto mt-10 px-4">
          {/* Tags and Share Section */}
          <div className="flex justify-between items-center mb-6 pt-3 pb-3 border-b border-t">
            <div>
              <span className="text-gray-500">Tags: </span>
              {["Mobile", "Laptop", "Smart TV"].map((tag) => (
                <span key={tag} className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm mr-2">{tag}</span>
              ))}
            </div>
            <div className="flex items-center space-x-4 ">
              <span className="text-gray-500">Share:</span>
              {/* {[faFacebook, faTwitter, faLinkedin].map((icon, index) => (
                <a key={index} href="#" className="flex items-center text-blue-500 hover:text-blue-400">
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))} */}
            </div>
          </div>

          {/* Posts Section */}
          <div className="flex flex-wrap mb-6 mt-10">
            {/* Post 1 */}
            <div className="text-gray-700 w-full sm:w-1/2 ">
              <div className="flex items-center mb-2">
                <div className="bg-gray-200 h-[100px] rounded-md w-[103px] flex items-center justify-center text-xl text-gray-600">
                  100x103
                </div> 
                <div className="ml-3">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400 mr-2" />
                    <span className="text-[1.115rem]">27, Jun 2022</span>
                  </div>
                  <a className="text-lg text-[1.125rem]">Lorem ipsum dolor amet</a> <br />
                  <a className="text-lg text-[1.125rem]"> conse adip</a>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="text-gray-700 w-full sm:w-1/2 pl-2">
              <div className="flex items-start mb-4 justify-end">
                <div className="ml-10 w-[200px]">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400 mr-2" />
                    <span className="text-[1.115rem]">27, Jun 2022</span>
                  </div>
                  <a className="text-lg text-[1.125rem]">Lorem ipsum dolor amet</a>
                  <a className="text-lg text-[1.125rem]"> conse adip</a>
                </div>
                <div className="bg-gray-200 h-[100px] rounded-md w-[100px] flex items-center justify-center text-xl text-gray-600 ml-4">
                  100x101
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-10">
            <h3 className="text-xl w-[200px] font-bold mb-4 border-b-2">Comments (03)</h3>
            {/* Comments List */}
            <div className="mt-10">
              <div className="text-gray-700 w-full">
                {/* Comment Item */}
                <div className="flex items-start mb-4 p-5">
                  <div className="bg-gray-200 h-[100px] w-[100px] rounded-md flex items-center justify-center text-xl text-gray-600">
                    100x103
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <p className="font-bold mr-2">Ramon Bateman</p>
                      <span>- 27, Jun 2022</span>
                    </div>
                    <p className="text-lg text-[1.125rem] mb-3 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <a href="#" className="bg-gray-500 text-white font-12 pt-1 pb-1 pr-2 pl-2 color-white rounded-md hover:bg-blue-600 hover:text-white">Reply</a>
                  </div>
                </div>

                {/* Comment Item 2 */}
                <div className="flex items-start mb-4 w-[80%] ml-auto border-b border-t p-5">
                  <div className="bg-gray-200 h-[100px] w-[100px] rounded-md flex items-center justify-center text-lg text-gray-600">
                    100x103
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <p className="font-bold text-sm mr-2">Pierre Hackett</p>
                      <span className="text-sm">- 27, Jun 2022</span>
                    </div>
                    <p className="text-sm mb-3 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <a href="#" className="bg-gray-500 text-white rounded-md hover:bg-blue-600 hover:text-white pt-1 pb-1 pr-2 pl-2 text-sm">Reply</a>
                  </div>
                </div>
                
                {/* Comment Item */}
                <div className="flex items-start mb-4 p-5">
                  <div className="bg-gray-200 h-[100px] w-[100px] rounded-md border-gray-400 flex items-center justify-center text-xl text-gray-600">
                    100x103
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <p className="font-bold mr-2">Pierre Hackett</p>
                      <span>- 27, Jun 2022</span>
                    </div>
                    <p className="text-lg text-[1.125rem] mb-3 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <a href="#" className="bg-gray-500 text-white font-12 pt-1 pb-1 pr-2 pl-2 color-white rounded-md hover:bg-blue-600 hover:text-white">Reply</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comment Section */}
          <div className="mt-10 p-4 rounded-lg">
            <h3 className="text-xl w-[250px] font-semibold mb-4 border-b-2">Leave A Comment</h3>
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Name *"
                className="flex-1 p-2 border border-gray-300 rounded-lg mr-2"
              />
              <input
                type="email"
                placeholder="Email *"
                className="flex-1 p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <input
              type="text"
              placeholder="Subject (Optional)"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <textarea
              placeholder="Message"
              className="w-full p-4 border border-gray-300 rounded-lg mb-4"
              rows="4"
            ></textarea>
            <button className="bg-blue-500 text-white py-3 px-5 rounded-lg hover:bg-black">
              Send A Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;