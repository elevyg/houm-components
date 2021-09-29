ARG BIT_VERSION=latest
FROM bitcli/bit:${BIT_VERSION}
ARG SCOPE_PATH=/scope
WORKDIR ${SCOPE_PATH}
RUN bit init --bare
CMD bit start