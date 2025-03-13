import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGlobe, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../Spinner"; // Assuming you have a Spinner component
import "./SearchPage.css";

const SearchPage = () => {
  // State for form inputs
  const [name, setName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  // State for API call
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  // Perform research using the backend server
  const performResearch = async (name, companyUrl, jobTitle) => {
    try {
      const url = `http://localhost:5000/api/research?name=${encodeURIComponent(
        name
      )}&companyUrl=${encodeURIComponent(companyUrl)}&jobTitle=${encodeURIComponent(
        jobTitle
      )}`;
      console.log("Fetching data from:", url);

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data from the server.");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error performing research:", error);
      throw error;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResults(null);
    setError(null);

    try {
      if (!name.trim() || !companyUrl.trim() || !jobTitle.trim())
        throw new Error("All fields are required.");
      const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
      if (!urlPattern.test(companyUrl))
        throw new Error("Please enter a valid company URL.");

      const researchResults = await performResearch(name, companyUrl, jobTitle);
      setResults(researchResults);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-page">
      <h1>Search</h1>
      <p>Enter details to perform a new search.</p>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="research-form">
        <div className="form-group">
          <label htmlFor="name">
            <FontAwesomeIcon icon={faUser} className="icon" /> Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyUrl">
            <FontAwesomeIcon icon={faGlobe} className="icon" /> Company URL
          </label>
          <input
            id="companyUrl"
            type="text"
            placeholder="Enter company URL"
            value={companyUrl}
            onChange={(e) => setCompanyUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">
            <FontAwesomeIcon icon={faBriefcase} className="icon" /> Job Title
          </label>
          <input
            id="jobTitle"
            type="text"
            placeholder="Enter job title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? <Spinner /> : "Search"}
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {/* Results Section */}
      {results && (
        <div className="results">
          <h2>Research Results for {results.name}</h2>
          <div className="insights">
            <h3>Insights</h3>
            <ul>
              {results.insights.map((insight, index) => (
                <li key={index}>{insight}</li>
              ))}
            </ul>
          </div>
          <div className="articles">
            <h3>Related Articles</h3>
            <ul>
              {results.articles.map((article, index) => (
                <li key={index}>
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;