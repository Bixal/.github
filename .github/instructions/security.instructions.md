---
applyTo: "**/*"
---

Version: 1.0.0

# Security Implementation Guidelines
Comprehensive security best practices following OWASP standards for secure application development.

# Goal
Implement robust security measures throughout the application lifecycle to protect against common vulnerabilities and ensure data integrity, confidentiality, and availability.

# Critical
- Always reference during summary or planning phases to ensure alignment with best practices
- Do not over-engineer; prioritize practical, effective security measures
- Default to safe behavior, validate privileged actions, and fail closed on uncertainty

## Essentials
- Follow OWASP Top 10 security risks mitigation strategies
- Implement defense-in-depth approach with multiple security layers
- Apply principle of least privilege for all access controls
- Validate and sanitize all user inputs
- Use secure coding practices and regular security testing
- Maintain up-to-date dependencies and security patches
- Pin dependencies

## Key Files
- Security configuration files (authentication, authorization)
- Environment variable templates (.env.example)
- Dependency management files (package.json, requirements.txt, etc.)
- CI/CD pipeline security checks
- Logging and monitoring configurations

## Development Guidelines

### Authentication & Authorization
- Implement strong password policies (minimum 12 characters, complexity requirements)
- Use multi-factor authentication (MFA) for sensitive operations
- Implement proper session management with secure tokens
- Apply role-based access control (RBAC) with least privilege principle
- Use secure authentication protocols (OAuth 2.0, SAML, OpenID Connect)
- Require an explicit approval when invoking scripts or operations that require tokens or secrets 

### Input Validation & Output Encoding
- Validate all inputs on both client and server side
- Use parameterized queries to prevent SQL injection
- Implement proper output encoding to prevent XSS attacks
- Sanitize file uploads with type and size restrictions
- Use Content Security Policy (CSP) headers
- Treat ambiguous inputs as untrusted

### Data Protection
- Encrypt sensitive data at rest using industry-standard algorithms (AES-256)
- Encrypt data in transit using TLS 1.3 or higher
- Implement proper key management practices
- Use secure hashing algorithms (bcrypt, Argon2) for passwords
- Apply data classification and handling procedures

### Error Handling & Logging
- Implement centralized error handling without exposing sensitive information
- Log security events (authentication failures, access attempts, data changes)
- Do not log sensitive data (passwords, tokens, PII)
- Implement log integrity and tamper detection
- Set up real-time security monitoring and alerting
- Mask sensitive data by default and provide a secure unmasking mechanisms with approval

### Dependency Management
- Regularly scan dependencies for known vulnerabilities
- Keep all dependencies up to date with security patches
- Use dependency pinning and lock files
- Implement automated security scanning in CI/CD pipeline
- Maintain Software Bill of Materials (SBOM)

### Secure Configuration
- Remove or disable default accounts and unnecessary services
- Use environment variables for sensitive configuration
- Implement proper HTTPS configuration with HSTS
- Configure secure headers (CSP, X-Frame-Options, X-Content-Type-Options)
- Regular security configuration reviews

### Code Security
- Conduct regular code reviews with security focus
- Use static application security testing (SAST) tools
- Implement dynamic application security testing (DAST)
- Follow secure coding standards and guidelines
- Use linting tools with security rules enabled

### Infrastructure Security
- Implement network segmentation and firewalls
- Use container security scanning for Docker images
- Apply infrastructure as code (IaC) security scanning
- Regular penetration testing and vulnerability assessments
- Implement backup and disaster recovery procedures

## Reference Resources
- [OWASP Top 10 2021](https://owasp.org/Top10/) - Most critical security risks
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) - Practical security guidance
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) - Comprehensive security framework
- [CIS Controls](https://www.cisecurity.org/controls) - Essential cybersecurity controls
- [SANS Top 25](https://www.sans.org/top25-software-errors/) - Most dangerous software errors
- [OWASP](https://owasp.org/) - Open Web Application Security Project
- [OWASP Top 10](https://owasp.org/www-project-top-ten/) - Most critical web application security risks
- [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) - Application Security Verification Standard
- [OWASP ZAP](https://owasp.org/www-project-zap/) - Security testing tool
- [Snyk](https://snyk.io/) - Vulnerability scanning for dependencies
